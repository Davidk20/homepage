var links = [
    {
        "category" : "Essentials",
        "links" : [
            {
                "name" : "Gmail",
                "link" : "https://mail.google.com/mail/u/0/#inbox",
                "icon" : "https://e7.pngegg.com/pngimages/682/7/png-clipart-gmail-logo-gmail-email-aol-mail-outlook-com-logo-gmail-angle-text-thumbnail.png"
            },
            {
                "name" : "Google Calendar",
                "link" : "https://calendar.google.com/calendar/r",
                "icon" : "https://image.flaticon.com/icons/png/512/2702/2702609.png"
            },
            {
                "name" : "Outlook",
                "link" : "https://outlook.live.com/mail/0/inbox",
                "icon" : "https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Outlook-icon.png"
            }
        ]
    },

    {
        "category" : "University",
        "links" : [
            {
                "name" : "Moodle",
                "link" : "https://moodle.royalholloway.ac.uk/",
                "icon" : "https://software-advice.imgix.net/managed/products/logos/moodle_logo.png?auto=format"
            },
            {
                "name" : "NoMachine",
                "link" : "https://linux.cim.rhul.ac.uk/nxwebplayer",
                "icon" : "https://www.nomachine.com/NMLogo.png"
            },
            {
                "name" : "Timetable",
                "link" : "https://webtimetables.royalholloway.ac.uk/SWS/SDB2122SWS/Login.aspx",
                "icon" : "https://pbs.twimg.com/profile_images/863019488756867072/jfSAkjvI_400x400.jpg"
            },
            {
                "name" : "Outlook",
                "link" : "https://outlook.office.com/mail/inbox/",
                "icon" : "https://icons.iconarchive.com/icons/carlosjj/microsoft-office-2013/256/Outlook-icon.png"
            },
            {
                "name" : "Campus Connect",
                "link" : "http://lum-prod.ec.royalholloway.ac.uk/",
                "icon" : "https://pbs.twimg.com/profile_images/863019488756867072/jfSAkjvI_400x400.jpg"
            },
            {
                "name" : "Panopto",
                "link" : "https://rhul.hosted.panopto.com/Panopto/Pages/Home.aspx",
                "icon" : "https://pbs.twimg.com/profile_images/1236051823510704128/HH0C6kZg.jpg"
            }
        ]
    },

    {
        "category" : "Development",
        "links" : [
            {
                "name" : "GitHub",
                "link" : "https://github.com/",
                "icon" : "https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
            },
            {
                "name" : "Trello",
                "link" : "https://trello.com/b/K4d2wwwB/newgymbuddy",
                "icon" : "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/trello-512.png"
            },
            {
                "name" : "Netlify",
                "link" : "https://app.netlify.com/teams/davidk20/sites",
                "icon" : "https://www.netlify.com/img/press/logos/logomark.png"
            },
            {
                "name" : "Firebase",
                "link" : "https://console.firebase.google.com/u/2/project/newgymbuddy-f81b4/overview",
                "icon" : "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
            }
        ]
    },

    {
        "category" : "Entertainment",
        "links" : [
            {
                "name" : "Sky Sports",
                "link" : "https://www.skysports.com/",
                "icon" : "https://golffitbyolly.com/wp-content/uploads/2019/11/sky-sports-logo-square-tv-advertising-media.png"
            },
            {
                "name" : "Prime Video",
                "link" : "https://www.amazon.co.uk/Amazon-Video/b?ie=UTF8&node=3010085031",
                "icon" : "https://www.mediaplaynews.com/wp-content/uploads/2018/04/Prime-Video-Stacked.jpg"
            },
            {
                "name" : "Youtube",
                "link" : "https://www.youtube.com",
                "icon" : "https://www.newsfolo.com/wp-content/uploads/2017/08/youtube.jpg"
            },
            {
                "name" : "Netflix",
                "link" : "https://www.netflix.com/browse",
                "icon" : "https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/netflix-logo-edited.png?w=585&scale=down"
            },
            {
                "name" : "Virgin TV",
                "link" : "https://virgintvgo.virginmedia.com/en.html",
                "icon" : "https://community.virginmedia.com/html/assets/tv-go.png"
            },
            {
                "name" : "Plex",
                "link" : "https://app.plex.tv/desktop#",
                "icon" : "https://media.glassdoor.com/sqll/1429624/plex-ga-squarelogo-1499174297208.png"
            }
        ]
    }
];



// Expands the dropdown categories on mobile or smaller devices where the compact view is used.
function expand(id){
    var x = id + "Dropdown"
    document.getElementById(x).classList.toggle("show");
}