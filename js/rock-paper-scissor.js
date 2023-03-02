let images = document.querySelectorAll(".abled");
let computer_imgs = document.querySelectorAll(".cpu");
let user_score = 0;
let cpu_score = 0;

document.querySelector("button").addEventListener("click", function () {
    for (let i = 0; i <= images.length; i++) {
        images[i].classList.remove("hidden");
        computer_imgs[i].classList.add("hidden");
        images[i].classList.add("abled");
        images[i].classList.remove("disabled");
    };
});

for (let i = 0; i <= images.length; i++) {
    images[i].addEventListener("click", () => {
        if (images[i].classList.contains("abled")) {
            let random_number = Math.round(Math.random() * 2);
            images[i].classList.remove("abled")
            images[i].classList.add("disabled");
            hiddenSelect(i);
            // console.log(computer_imgs[random_number])
            computer_imgs[random_number].classList.remove("hidden");
            gameLogic(i, random_number);
        }else{
        };
    });
};

function hiddenSelect(i) {
    for (let j = 0; j <= images.length - 1; j++) {
        if (j !== i) {
            images[j].classList.toggle("hidden");
        };
    };
};

function gameLogic(user_choice, cpu_choice) {
    if (user_choice == 0 && cpu_choice == 1) {
        cpu_score++;
    } else if (user_choice == 0 && cpu_choice == 2) {
        user_score++;
    } else if (user_choice == 1 && cpu_choice == 0) {
        user_score++;
    } else if (user_choice == 1 && cpu_choice == 2) {
        cpu_score++;
    } else if (user_choice == 2 && cpu_choice == 0) {
        cpu_score++;
    } else if (user_choice == 2 && cpu_choice == 1) {
        user_score++;
    };
    document.querySelector("#cpu-score").textContent = cpu_score;
    document.querySelector("#user-score").textContent = user_score;
};



