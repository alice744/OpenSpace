document.addEventListener('DOMContentLoaded', function (qualifiedName){

    function launchButton () {
        let launchOrder = true;
        [...document.getElementsByClassName("check-buttons")[0].children].forEach(
            d => d.checked ? null: launchOrder = false
        );
        [...document.getElementsByClassName("levers")[0].children].forEach(
            d => d.value === "100" ? null: launchOrder = false
        );
        if(launchOrder) {
            document.getElementById("launch").removeAttribute("disabled");
        } else {
            document.getElementById("launch").setAttribute("disabled", "");
        }
    }

    document.getElementById("passVal").addEventListener("click", d => {
        if(document.getElementById("passText").value === "TrustNo1") { //pwd : TrustNo1
            [...document.getElementsByClassName("check-buttons")[0].children].forEach(
                d => {
                    d.removeAttribute("disabled", "");
                    d.addEventListener("change", E => {
                        launchButton()
                    });
                }
            );
            [...document.getElementsByClassName("levers")[0].children].forEach(
                d => {
                    d.removeAttribute("disabled", "");
                    d.addEventListener("change", E => {
                        launchButton()
                    });
                }
            );
        }
    });

    document.getElementById("launch").addEventListener("click", d => {
        document.getElementsByClassName("rocket")[0].classList.add("launchRocket");
    });



})
