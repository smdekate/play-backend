const asyncHandler = (requestHandler) => async (err, req, res ,next) => {
    try {
        await requestHandler(req, res, next)
    } catch (error) {
        err.senc(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export {asyncHandler}

// const asyncHandler = (requestHandler) => async (req, res, next) => {
//     (req, res, next) => {
//         Promise.resolve((requestHandler(req, res, next))).reject((err) => next(err))
//     }
// }