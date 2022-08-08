module.exports = db = {}

initialize()

async function initialize() {
    mongoose.connect('mongodb+srv://JotaCoder:catalan16<password>@developer.8snxjsn.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
}