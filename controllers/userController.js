import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import validatePassword from '../utils/validatePassword.js';

// Register User
export const registerUser = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Check if the email already exists
        const userExists = await User.findOne({ where: { email } });
        if (userExists) return res.status(400).json({ message: 'Email already exists' });

        // Validate password
        if (!validatePassword(password)) {
            return res.status(400).json({
                message: 'Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
            });
        }

        // Hash the password and create the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashedPassword, name });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(401).json({ message: 'Invalid credentials' });

        // Generate JWT token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error });
    }
};

// Edit User (except email and password)
export const editUserDetails = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        await User.update({ name }, { where: { id } });
        res.status(200).json({ message: 'User details updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update details', error });
    }
};

// Edit Password
export const editUserPassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    try {
        // Validate password
        if (!validatePassword(password)) {
            return res.status(400).json({
                message: 'Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.'
            });
        }

        // Hash the new password and update
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.update({ password: hashedPassword }, { where: { id } });

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update password', error });
    }
};
