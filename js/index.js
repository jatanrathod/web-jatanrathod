window.onload = function() {
    var aboutTyped = new Typed('#about', {
        strings: [ 
            "> Hi, I am Jatan.",  
            "> I Love Design.", 
            "> I Love to Develop.",
            "> I Love to Travel."
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 3000,
        smartBackspace: true,
        cursorChar:"_",
        loop:true
    });

    var typed = new Typed('#quotes', {
        strings: [
            "Failure is an option here. if things are not failing, you are not innovating. - Elon Musk",
            "It matters if you just don't give up. - Stephen Hawking",
            "This is the most simple and basic component of life: our struggles determine our successes. - The Subtle Art of Not Giving a F*ck",
            "Design is not just what it looks like and feels like. Design is how it works. - Steve Jobs",
            "In the middle of difficulty lies opportunity. - Albert Einstein",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 3000,
        smartBackspace: true,
        cursorChar:"_",
        loop: true,
        shuffle: true
    });
};