const { StatusCodes } = require('http-status-codes');
const { BookingService } = require('../services/index');

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        console.log("FROM BOOKING CONTROLLER: ", response);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully completed booking',
            data: response,
            success: true,
            error: {}
        });
    } catch (error) {
        console.log("FROM BOOKING CONTROLLER: ", error);
        return res.status(error.statusCode).json({
            message: error.message,
            data: {},
            success: false,
            error: error.explanation
        });
    }
}

module.exports = {
    create
}