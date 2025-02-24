 document.addEventListener("DOMContentLoaded", function () {
        const vehicles = [
            { name: "Honda Activa", currentKm: 1200 },
            { name: "Yamaha FZ", currentKm: 800 },
            { name: "Suzuki Access", currentKm: 1000 },
            { name: "Bajaj Pulsar", currentKm: 1100 },
            { name: "TVS Jupiter", currentKm: 900 }
        ];

        const tableBody = document.getElementById("table-body");

        vehicles.forEach((vehicle, index) => {
            const serviceDue = 1500;
            const kmLeft = serviceDue - vehicle.currentKm;
            let rowClass = "";

            if (kmLeft <= 300) {
                rowClass = "red"; // Urgent servicing required
            } else if (kmLeft <= 600) {
                rowClass = "yellow"; // Servicing due soon
            } else {
                rowClass = "green"; // Servicing not required soon
            }

            const row = `
                <tr class="${rowClass}">
                    <td>${index + 1}</td>
                    <td>${vehicle.name}</td>
                    <td>${vehicle.currentKm}</td>
                    <td>${serviceDue}</td>
                    <td>${kmLeft}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    });