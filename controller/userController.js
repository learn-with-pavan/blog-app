import User from '../models/User.js';

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) { 
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
}