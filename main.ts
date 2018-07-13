class FaceBook{

    constructor(
        private userName:String,
        private profilePicture: URL,
        private coverPhoto: URL,
        private dateOfBirth:String,
        private gender: String,
        private work:String,
        private education:String,
        private contactInfo:String[],
        private placesYouHaveLived:String[],
        private relationshipStatus:String,
        private checkIns:String[],
        private sports:String[],
        private music:String[],
        private movies:String[],
        private tvShows:String[],
        private books:String[],
        private likedPages:String[],
    )
    {
        this.userName = userName
        this.profilePicture = profilePicture
        this.coverPhoto = coverPhoto
        this.dateOfBirth = dateOfBirth
        this.gender = gender
        this.work = work
        this.education = education
        this.contactInfo = contactInfo
        this.placesYouHaveLived = placesYouHaveLived
        this.relationshipStatus = relationshipStatus
        this.checkIns = checkIns
        this.sports = sports
        this.music = music
        this.movies = movies
        this.tvShows = tvShows
        this.books = books
        this.likedPages = likedPages
    }

    getUserName =()=>{
        return this.userName
    }

    getProfilePicture =()=>{
        return this.profilePicture
    }

    getCoverPhoto =()=>{
        return this.coverPhoto
    }

    getDateOfBirth =()=>{
        return this.dateOfBirth
    }

    getGender =()=>{
        return this.gender
    }

    getWork =()=>{
        return this.work
    }

    getEducation =()=>{
        return this.education
    }

    getContactInfo =()=>{
        return this.contactInfo
    }

    getPlacesYouHaveLived =()=>{
        return this.placesYouHaveLived
    }

    getRelationshipStatus =()=>{
        return this.relationshipStatus
    }

    getCheckIns =()=>{
        return this.checkIns
    }

    getSports =()=>{
        return this.sports
    }

    getMusic =()=>{
        return this.music
    }

    getMovies =()=>{
        return this.movies
    }

    getTvShows =()=>{
        return this.tvShows
    }

    getBooks =()=>{
        return this.books
    }

    setBooks =(moreBooks:String)=>{
        const newLocal = (this.books).push(moreBooks);
    }

    getLikedPges =()=>{
        return this.likedPages
    }
}

let facebookObj = new FaceBook("Riya Garg",new URL(`https://www.facebook.com`),new URL(`https://www.facebook.com/cover-photo`),"10 Feb, 1995", "Female","Self Employed","GR Global Academy",["Mobile","9999988888","Email","riyagarg@example.com",],["Jaipur,Jalandhar,Gurgaon"],"String",["City Palace","Triton Mall"],["BasketBall"],["BollyWood","Punjabi","Marwari"],["DDLJ","Baby","Sultan","Udta Punjab","Annabelle"],["Tarak Mehta Ka Oolta Chashmah"],["Half Girlfriend"],["CreativeWorld","DIY Carfts"])
console.log(`Your Facebook Details are : ${JSON.stringify(facebookObj)}`)

//to display old list of books
console.log(`Hello ${facebookObj.getUserName()} ! Your old list of liked Books is : ${facebookObj.getBooks()}`)

//updating list of books by calling setter
facebookObj.setBooks("Three Mistakes");
console.log(`Hello ${facebookObj.getUserName()} ! Your updated list of liked Books is : ${facebookObj.getBooks()}`)