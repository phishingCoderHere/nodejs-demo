module.exports = (mongoose) => {
    const Mask = mongoose.model
        ('Mask',
            {
                id: Number,
                size: String,
                color: String,
                price: Number,
                createDate: Date,
                modifyDate: Date,
                createUser: Number,
                modifyUser: Number
            }
        );
    return User
}
