var FaceBook = /** @class */ (function () {
    function FaceBook(userName, profilePicture, coverPhoto, dateOfBirth, gender, work, education, contactInfo, placesYouHaveLived, relationshipStatus, checkIns, sports, music, movies, tvShows, books, likedPages) {
        var _this = this;
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.contactInfo = contactInfo;
        this.placesYouHaveLived = placesYouHaveLived;
        this.relationshipStatus = relationshipStatus;
        this.checkIns = checkIns;
        this.sports = sports;
        this.music = music;
        this.movies = movies;
        this.tvShows = tvShows;
        this.books = books;
        this.likedPages = likedPages;
        this.getUserName = function () {
            return _this.userName;
        };
        this.getProfilePicture = function () {
            return _this.profilePicture;
        };
        this.getCoverPhoto = function () {
            return _this.coverPhoto;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getContactInfo = function () {
            return _this.contactInfo;
        };
        this.getPlacesYouHaveLived = function () {
            return _this.placesYouHaveLived;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.getCheckIns = function () {
            return _this.checkIns;
        };
        this.getSports = function () {
            return _this.sports;
        };
        this.getMusic = function () {
            return _this.music;
        };
        this.getMovies = function () {
            return _this.movies;
        };
        this.getTvShows = function () {
            return _this.tvShows;
        };
        this.getBooks = function () {
            return _this.books;
        };
        this.setBooks = function (moreBooks) {
            var newLocal = (_this.books).push(moreBooks);
        };
        this.getLikedPges = function () {
            return _this.likedPages;
        };
        this.userName = userName;
        this.profilePicture = profilePicture;
        this.coverPhoto = coverPhoto;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.contactInfo = contactInfo;
        this.placesYouHaveLived = placesYouHaveLived;
        this.relationshipStatus = relationshipStatus;
        this.checkIns = checkIns;
        this.sports = sports;
        this.music = music;
        this.movies = movies;
        this.tvShows = tvShows;
        this.books = books;
        this.likedPages = likedPages;
    }
    return FaceBook;
}());
var facebookObj = new FaceBook("Riya Garg", new URL("https://www.facebook.com"), new URL("https://www.facebook.com/cover-photo"), "10 Feb, 1995", "Female", "Self Employed", "GR Global Academy", ["Mobile", "9999988888", "Email", "riyagarg@example.com",], ["Jaipur,Jalandhar,Gurgaon"], "String", ["City Palace", "Triton Mall"], ["BasketBall"], ["BollyWood", "Punjabi", "Marwari"], ["DDLJ", "Baby", "Sultan", "Udta Punjab", "Annabelle"], ["Tarak Mehta Ka Oolta Chashmah"], ["Half Girlfriend"], ["CreativeWorld", "DIY Carfts"]);
console.log("Your Facebook Details are : " + JSON.stringify(facebookObj));
console.log("Hello " + facebookObj.getUserName() + " ! Your old list of liked Books is : " + facebookObj.getBooks());
facebookObj.setBooks("Three Mistakes");
console.log("Hello " + facebookObj.getUserName() + " ! Your updated list of liked Books is : " + facebookObj.getBooks());
