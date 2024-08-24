const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        return Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err))
    }
}


export default asyncHandler

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             succss:  false,
//             message: error.message
//         })
//     }
// }