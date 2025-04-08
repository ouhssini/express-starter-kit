function guest(req, res, next) {
    if (req.isAuthenticated()) {
        return res.status(403).json({ message: 'Access denied. You are already authenticated.' });
    }
    next();
}

export default guest;
