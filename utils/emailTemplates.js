let resetPassword = (email, token) => {
    const emailTemplate = {
        from: "noreply@gmail.com",
        to: email,
        subject: "Password reset for " + email,
        text:
            "Password Reset Link: " + 
            "localhost: 4000/customers/" + 
            "resetPassword/" + token,
    };
    return emailTemplate;
}

module.exports = { resetPassword };