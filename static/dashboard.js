document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("eggChart").getContext("2d");
    var eggChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Produksi Hari Ini", "Target Produksi"],
            datasets: [{
                label: "Jumlah Telur",
                data: [300, 500],
                backgroundColor: ["#4CAF50", "#FFC107"],
            }],
        },
    });
});

function beriMakan() {
    alert("Pakan telah diberikan!");
}
