import axios from 'axios';
import 'dotenv';

let debugMode = true;

// Exporting a function called 'mySketch'
export const mySketch = (p) => {

  let randomMovies;

  // I didn't want to keep hitting the endpoint and running up my daily limit tally, so I made a dummy object based
  // on an arbitrarily chosen response
  let randomMoviesDummy = { data: [
      {
        "_id": "65ef4238675dde80108e7dd8",
        "id": 1136086,
        "title": "Don't Mind",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "1990-03-03T00:00:00.000Z",
        "revenue": 0,
        "runtime": 110,
        "adult": false,
        "budget": 0,
        "original_language": "ja",
        "original_title": "ドンマイ",
        "overview": "Set in downtown Tokyo, it depicts the activities of a weak youth baseball team, the Chidori Boys, and the ordinary people who live there.",
        "popularity": 1.188,
        "poster_path": "https://image.tmdb.org/t/p/original//dcp9jkyOlRcvFz53L2C0MKonQTM.jpg",
        "production_companies": "Shochiku",
        "production_countries": "Japan",
        "spoken_languages": "Japanese"
      },
      {
        "_id": "65ef41d2675dde80108d0bfb",
        "id": 1241044,
        "title": "Firefly",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2023-06-14T00:00:00.000Z",
        "revenue": 0,
        "runtime": 22,
        "adult": false,
        "budget": 0,
        "original_language": "hi",
        "original_title": "Jugnoo",
        "overview": "Set against the backdrop of NRC and CAA, the film navigates the life of an old man who is forced into early retirement as he fails to produce proper documents.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//sWwnZmABUisgKIIARAxxmcGcBxy.jpg",
        "genres": "Drama",
        "production_companies": "Satyajit Ray Film & Television Institute",
        "production_countries": "India",
        "spoken_languages": "Bengali, Hindi"
      },
      {
        "_id": "65ef41e6675dde80108d5b3f",
        "id": 1250683,
        "title": "Quartiers sous tension",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2017-08-12T00:00:00.000Z",
        "revenue": 0,
        "runtime": 0,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt7235494",
        "original_language": "fr",
        "original_title": "Quartiers sous tension",
        "popularity": 1.257,
        "genres": "Documentary",
        "production_companies": "InformAction Films",
        "production_countries": "Canada",
        "spoken_languages": "French"
      },
      {
        "_id": "65ef3feb675dde801087077c",
        "id": 352758,
        "title": "Movie Mind Machine",
        "vote_average": 5.8,
        "vote_count": 5,
        "status": "Released",
        "release_date": "2015-12-31T00:00:00.000Z",
        "revenue": 0,
        "runtime": 12,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt3836642",
        "original_language": "en",
        "original_title": "Movie Mind Machine",
        "overview": "Two movie buffs invent a memory-erasing machine that allows them to watch their favorite movies over and over again like the first time.",
        "popularity": 0.786,
        "genres": "Comedy",
        "production_countries": "United States of America",
        "spoken_languages": "English"
      },
      {
        "_id": "65ef40e6675dde801089e032",
        "id": 311918,
        "title": "Guns N' Roses: 2 Classic Albums Under Review: Use Your Illusion I and II",
        "vote_average": 7.5,
        "vote_count": 1,
        "status": "Released",
        "release_date": "2007-10-30T00:00:00.000Z",
        "revenue": 0,
        "runtime": 85,
        "adult": false,
        "backdrop_path": "/qB9l3y5jJf0YM0ix0Z0ydTHGcRM.jpg",
        "budget": 0,
        "original_language": "en",
        "original_title": "Guns N' Roses: 2 Classic Albums Under Review: Use Your Illusion I and II",
        "overview": "Chronicling the impact of Guns N' Roses' simultaneous release of \"Use Your Illusion I\" and \"Use Your Illusion II,\" this documentary revisits the media events leading up to the release and the subsequent tour. Never before had the same band held the No. 1 and 2 spots on the Billboard charts. This milestone in rock history is told through backstage footage, interviews from musicians on the albums, and insight from biographers and journalists.",
        "popularity": 0.968,
        "poster_path": "https://image.tmdb.org/t/p/original//xMT7mOpdrCcHxhM7ZNmJT5fhzhK.jpg",
        "genres": "Documentary, Music",
        "spoken_languages": "English"
      },
      {
        "_id": "65ef43a9675dde801092dc89",
        "id": 795776,
        "title": "Can't Forget New Jersey",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2019-08-04T00:00:00.000Z",
        "revenue": 0,
        "runtime": 67,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt2380282",
        "original_language": "en",
        "original_title": "Can't Forget New Jersey",
        "overview": "CAN'T FORGET NEW JERSEY is a 2019 documentary film that details the history of Hip-Hop culture in the garden state. Starting with the release of rap's first hit single Rapper's Delight.",
        "popularity": 1.157,
        "poster_path": "https://image.tmdb.org/t/p/original//ekqoDaG9t4662Q0YjeEZ9uG8aVn.jpg",
        "production_countries": "United States of America"
      },
      {
        "_id": "65ef43cd675dde8010934ffb",
        "id": 611350,
        "title": "Dramonasc",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2018-06-01T00:00:00.000Z",
        "revenue": 0,
        "runtime": 26,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt8139798",
        "original_language": "fr",
        "original_title": "Dramonasc",
        "overview": "Summer in the French Alps. 15-year-old Lise meets up with her half-brother Simon, who, at 18, has moved back to live in the region with his mother. He fits in well with her group of friends and her boyfriend Kevin. One day Lise takes him to Dramonasc, the abandoned hamlet of their ancestors.",
        "popularity": 0.609,
        "poster_path": "https://image.tmdb.org/t/p/original//v3C2DXfJ2sdmPnxNAjJxnQ3s0AU.jpg",
        "genres": "Drama",
        "production_countries": "France",
        "spoken_languages": "French"
      },
      {
        "_id": "65ef43a0675dde801092bd91",
        "id": 851247,
        "title": "Breast Seller 2",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2007-08-14T00:00:00.000Z",
        "revenue": 0,
        "runtime": 179,
        "adult": true,
        "budget": 0,
        "imdb_id": "tt1089642",
        "original_language": "en",
        "original_title": "Breast Seller 2",
        "overview": "34 sets of big breasts! These bitches are stacked with monstrous racks! It's a breast-feeder's dream cum true as these gargantuan mammary glands are bared. The best of the best big boob scenes plus a bonus scene with never-before-seen footage.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//3TSVACMAWMSryjo2foJtLZi1zCy.jpg",
        "production_companies": "Third Degree Films"
      },
      {
        "_id": "65ef43f5675dde801093cdfd",
        "id": 590830,
        "title": "The American Gangster",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "1992-07-01T00:00:00.000Z",
        "revenue": 0,
        "runtime": 48,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt0297726",
        "original_language": "en",
        "original_title": "The American Gangster",
        "overview": "They fixed the World Series. They built Las Vegas. They terrorized America with their vicious murders and fearless robberies. They are men named Bugsy Siegel, Al Capone, John Dillinger, Pretty Boy Floyd, and Lucky Luciano. And, for the first time, THE AMERICAN GANGSTER tells the true story behind their ruthless rise to wealth and power. Filled with vintage film and actual photographs, THE AMERICAN GANGSTER is a gripping look at the birth of organized crime. From prohibition to prostitution, from gangland massacres to gambling empires, their most infamous deeds are chronicled in shocking detail. Even more explosive than the movies they inspired, such as Scarface and The Godfather, are the true histories of the brilliant, brutal gangsters who turned the American Dream into an ongoing nightmare.",
        "popularity": 0.766,
        "poster_path": "https://image.tmdb.org/t/p/original//s4YvR3LPn4FMnSBN2PDb52G7s3y.jpg",
        "tagline": "Crime pays.",
        "genres": "Documentary, Crime"
      },
      {
        "_id": "65ef40b1675dde8010893ec9",
        "id": 574183,
        "title": "Luis Buñuel, la transgression des rêves",
        "vote_average": 10,
        "vote_count": 1,
        "status": "Released",
        "release_date": "2018-03-10T00:00:00.000Z",
        "revenue": 0,
        "runtime": 60,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt8115304",
        "original_language": "fr",
        "original_title": "Luis Buñuel, la transgression des rêves",
        "overview": "Based on unpublished interviews with the family, Jean-Claude Carrière, his writer and biographer, family archives, mini-fictions that dramatize the memories evoked and in constant echo with the upcoming films whose images seem to crystallize over the narrative, we wish to reinterpret Luis Buñuel's work through these decisive years, revealing hidden coherence, originality and beauty.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//9ClLE9q022shWH2AdZIH4TOhJwS.jpg",
        "genres": "Documentary",
        "production_companies": "Bliss",
        "production_countries": "France",
        "spoken_languages": "Spanish, French"
      },
      {
        "_id": "65ef41c5675dde80108cdc24",
        "id": 1178378,
        "title": "Eduru Maneli Ganda Pakkada Maneli Hendathi",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "revenue": 0,
        "runtime": 137,
        "adult": false,
        "budget": 0,
        "original_language": "en",
        "original_title": "Eduru Maneli Ganda Pakkada Maneli Hendathi",
        "overview": "Vasudev, a miser, tries to control his pregnant wife's spending habits. Furious, she leaves him. Years later, unknowingly she rents a house opposite his.",
        "popularity": 0.6
      },
      {
        "_id": "65ef40a1675dde8010890d2c",
        "id": 825690,
        "title": "The Blackout - This Is Where The Story Ends",
        "vote_average": 10,
        "vote_count": 1,
        "status": "Released",
        "revenue": 0,
        "runtime": 180,
        "adult": false,
        "backdrop_path": "/peI1gAlLUoiNyv4880oxKTvkK6o.jpg",
        "budget": 0,
        "original_language": "en",
        "original_title": "The Blackout - This Is Where The Story Ends",
        "overview": "The final ever concert performed by The Blackout at Merthyr Tydfil Leisure Centre on 28 March 2015.  The film also includes a feature length documentary telling the story of the band.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//7mqXUXZykzSheuc9iRw38DV1r1U.jpg",
        "tagline": "This Is It, Is It?",
        "genres": "Music",
        "production_companies": "Sitcom Soldiers",
        "production_countries": "United Kingdom"
      },
      {
        "_id": "65ef3fb8675dde8010867ca7",
        "id": 538198,
        "title": "Los dos carnales",
        "vote_average": 5,
        "vote_count": 8,
        "status": "Released",
        "release_date": "1983-11-24T00:00:00.000Z",
        "revenue": 0,
        "runtime": 90,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt0338935",
        "original_language": "es",
        "original_title": "Los dos carnales",
        "overview": "Pre-teen, and his orphaned best-bud, live by their wits while his mom is serving a prison sentence.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//2ikR3WevX1wWAvVizw9yN5qEQHG.jpg"
      },
      {
        "_id": "65ef43f9675dde801093d863",
        "id": 595701,
        "title": "The Falling Dust",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2004-11-26T00:00:00.000Z",
        "revenue": 0,
        "runtime": 0,
        "adult": false,
        "backdrop_path": "/pldzbgXj0AY6zCH1iGCcHgvRlJK.jpg",
        "budget": 0,
        "imdb_id": "tt0399661",
        "original_language": "el",
        "original_title": "Η Σκόνη Που Πέφτει",
        "overview": "A 50 year old journalist, son of a civil war hero, who died fighting for the right forces is shattered, when he recognizes him in a documentary, fighting for the communists. He starts searching for the truth, despite his family's objections, who fear that they will lose privileges if the status of the dead changes after the search.",
        "popularity": 0.665,
        "poster_path": "https://image.tmdb.org/t/p/original//oh3K8QnAbsSB79ObtmBU4WdNend.jpg",
        "genres": "Drama, Action",
        "production_companies": "Greek Film Centre, EPT, New Star",
        "production_countries": "Greece",
        "spoken_languages": "Greek"
      },
      {
        "_id": "65ef4044675dde8010880a32",
        "id": 67780,
        "title": "Arie & Silvester: 200%",
        "vote_average": 7.2,
        "vote_count": 2,
        "status": "Released",
        "release_date": "2005-01-01T00:00:00.000Z",
        "revenue": 0,
        "runtime": 165,
        "adult": false,
        "budget": 0,
        "imdb_id": "tt5230052",
        "original_language": "nl",
        "original_title": "Arie & Silvester: 200%",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//7w8QmSUomoG5NY81PX076m2gSs1.jpg",
        "genres": "Comedy",
        "production_companies": "Universal Pictures International (UPI)",
        "production_countries": "Netherlands",
        "spoken_languages": "Dutch"
      },
      {
        "_id": "65ef43e4675dde80109396ad",
        "id": 584247,
        "title": "Jazz Camping",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "1959-07-01T00:00:00.000Z",
        "revenue": 0,
        "runtime": 9,
        "adult": false,
        "budget": 0,
        "original_language": "pl",
        "original_title": "Jazz Camping",
        "overview": "Musicians and jazz lovers come to Zakopane to relax and make music together. Kalatówki is the location where the jazz campsite takes place. Andrzej Trzaskowski's band “Jazz Believers” is the star of the film.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//fJWZAdFM8d0W4OdrJYLUCatOrV9.jpg",
        "genres": "Documentary",
        "production_companies": "WFDiF",
        "production_countries": "Poland",
        "spoken_languages": "Polish"
      },
      {
        "_id": "65ef4409675dde8010940b14",
        "id": 707970,
        "title": "Das Bumsmobil 3: In Hamburg",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "revenue": 0,
        "runtime": 0,
        "adult": true,
        "budget": 0,
        "original_language": "de",
        "original_title": "Das Bumsmobil 3: In Hamburg",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//4GVSBuyK8i7d2mR4IYYprfHow5U.jpg"
      },
      {
        "_id": "65ef440b675dde80109412e1",
        "id": 715604,
        "title": "Natural History Redux",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "release_date": "2014-02-05T00:00:00.000Z",
        "revenue": 0,
        "runtime": 29,
        "adult": false,
        "budget": 0,
        "homepage": "http://morphologicstudios.com/index.php?/film/natural-history-redux/",
        "original_language": "en",
        "original_title": "Natural History Redux",
        "overview": "23 natural history films by Coral Morphologic, remixed/remastered and compiled into a half-hour odyssey of the sea.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//qkip3vK8vpeOthIkN2hccoZiY6O.jpg",
        "tagline": "Coral Morphologic presents 'Natural History Redux'"
      },
      {
        "_id": "65ef43e1675dde8010938f46",
        "id": 580977,
        "title": "GThai Movie 7: Pheromone",
        "vote_average": 0,
        "vote_count": 0,
        "status": "Released",
        "revenue": 0,
        "runtime": 0,
        "adult": true,
        "backdrop_path": "/m55optCEjBW9XFcxbmkX3zXoZEG.jpg",
        "budget": 0,
        "original_language": "en",
        "original_title": "GThai Movie 7: Pheromone",
        "overview": "The story of a hot guy at school is seeing a musician and later one has been involved with a security.",
        "popularity": 0.6,
        "poster_path": "https://image.tmdb.org/t/p/original//zUkBxJZwFppGWzEWCjsCGIGJfbt.jpg",
        "production_companies": "Demon666 Production"
      },
      {
        "_id": "65ef4053675dde8010882965",
        "id": 739149,
        "title": "Brooklyn",
        "vote_average": 8,
        "vote_count": 2,
        "status": "Released",
        "release_date": "2020-01-21T00:00:00.000Z",
        "revenue": 0,
        "runtime": 149,
        "adult": true,
        "backdrop_path": "/65RcNgOj7qAfwfUHklJ4w1fYmjt.jpg",
        "budget": 0,
        "original_language": "en",
        "original_title": "Brooklyn",
        "overview": "Elegant Angel Presents BROOKLYN an over 2 hour showcase dedicated to the beautiful busty beauty Brooklyn Chase!! Featuring her 1st Double Vaginal gangbang plus an interracial gang bang!!! Award winning director Sid Knox brings you the absolutely stunning Brooklyn Chase in her very own breakout showcase. Brooklyn takes on 5 big cocks in her 1st ever Double Vag gang bang!! Then devours black cock after black cock in a wild interracial DP gang bang! Watch her cum over and over again in intense anal and lesbian scenes! Full of interviews, tease, creative scenarios and incredible locations! Do not miss! Starring Brooklyn Chase and Kenzie Taylor! Enjoy!",
        "popularity": 1.136,
        "poster_path": "https://image.tmdb.org/t/p/original//nYgPfI4kp2hJTyk0K7JOx8Nb3B5.jpg",
        "production_companies": "Elegant Angel",
        "production_countries": "United States of America",
        "spoken_languages": "English"
      }
    ] };

  let maxSize = 500
  let wspeed = 1.66
  let hspeed = 1.33
  let w = 0
  let h = maxSize
  let r = 0

  let movieTitles = [];
  let titleIndex = 0;

  // Calling p5.js functions, using the variable 'p'
  p.setup = () => {

    console.log(process.env.X_RAPIDAPI_KEY);
    if (!debugMode) {

      axios.get('https://moviedatabase8.p.rapidapi.com/Random/20', {
        headers: {
          'x-rapidapi-key': process.env.local.X_RAPIDAPI_KEY, // this doesn't work yet, just put your own API key in from your RapidAPI account. I'm so sick of this shit.
          'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      })
          .then(response => {
            randomMovies = response;
            console.log(randomMovies);

            // Creating a canvas using the entire screen of the webpage
            p.createCanvas(window.innerWidth, window.innerHeight)
            p.strokeWeight(5)
            p.background(255)

            console.log('p5.js setup function executed! (debug mode off; API endpoint hit)')
          })
          .catch(error => {
            console.error(error);
          });
    }

    if (debugMode) {
      p.createCanvas(window.innerWidth, window.innerHeight)
      p.strokeWeight(5)
      p.background(255)

      randomMovies = randomMoviesDummy;

      console.log(randomMovies.data[0].title)

      console.log('p5.js setup function executed! (debug mode on)')

      console.log(randomMovies)

      for (let data in randomMovies.data) {
        movieTitles.push(randomMovies.data[data].title);
        // console.log(randomMovies.data[data].title);
      }
    }

  }

  p.draw = () => {
    p.background(255, 50)

    for (let title in movieTitles) {
      p.push();
        p.fill('black');
        p.textSize(32);
        p.text(movieTitles[title], p.random(50, window.innerWidth - 50), p.random(50, window.innerHeight - 50));
      p.pop();
    }

    // Clear the frame

    p.push();
      p.circle(30, 30, 10);
    p.pop();

    p.push();
      // Draw an ellipse
      p.translate(p.width / 2, p.height / 2)
      p.rotate(r)
      p.fill(0, 1)
      p.stroke(5)
      p.ellipse(0, 0, w, h)

      // Updating rotation and increment values
      r = r + 0.015
      w = w + wspeed
      h = h + hspeed
      if (w < 0 || w > maxSize) wspeed *= -1
      if (h < 0 || h > maxSize) hspeed *= -1
    p.pop();
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }
}
