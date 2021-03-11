import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems:[{
        name:{type:String,required:true},
        image:{type:String,required:true},
        product:{type:mongoose.Schema.Types.ObjectId,ref:'Product',required:true}
    }],
    orderDetails:{
        tshirtName:{type:String,required:true},
        size:{type:String,required:true}
    },
    paymentMethod:{type:String,required:true},
    totalPrice:{type:Number,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    isPaid:{type:Boolean,default:false},
    paidAt:{type:Date},
    isDelivered:{type:Boolean,default:false},
    deliveredAt:{type:Date}
},{
    timestamps:true
});

const Order = mongoose.model('Order',orderSchema);
export default Order;