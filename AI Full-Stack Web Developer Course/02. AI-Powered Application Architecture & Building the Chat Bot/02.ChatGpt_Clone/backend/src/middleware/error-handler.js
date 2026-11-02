export const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: "somethng went wrong try again later",
    });
}