// JS FILE

// Generate dummy table rows exactly like layout preview
const tableBody = document.getElementById("tableBody");

// Generate table rows from scaffolding data
const scaffoldingData = [
  { id: 1, nama: "Scaffolding Frame 170cm", stok: 24 },
  { id: 2, nama: "Cross Brace 192cm", stok: 40 },
  { id: 3, nama: "Heavy Duty Jack Base 60cm", stok: 18 },
  { id: 4, nama: "U-Head Jack 48cm", stok: 15 },
  { id: 5, nama: "Pipa Scaffolding 6m", stok: 32 },
  { id: 6, nama: "Coupler Swivel", stok: 120 },
  { id: 7, nama: "Catwalk Steel 240cm", stok: 12 },
  { id: 8, nama: "Wheel Caster 8 inch", stok: 20 },
  { id: 9, nama: "Scaffolding Frame 120cm", stok: 33 },
  { id: 10, nama: "Cross Brace 122cm", stok: 27 },
  { id: 11, nama: "Catwalk Aluminium 200cm", stok: 14 },
  { id: 12, nama: "Joint Pin Scaffolding", stok: 95 },
  { id: 13, nama: "Base Plate Solid", stok: 50 },
  { id: 14, nama: "Pipa Scaffolding 3m", stok: 60 },
  { id: 15, nama: "Clamp Fixed", stok: 140 },
  { id: 16, nama: "Clamp Swivel Heavy Duty", stok: 88 },
  { id: 17, nama: "Scaffolding Stairway 180cm", stok: 9 },
  { id: 18, nama: "Scaffolding Ladder", stok: 17 },
  { id: 19, nama: "Roda Caster 6 inch", stok: 45 },
  { id: 20, nama: "Platform Steel 300cm", stok: 11 }
];

function generateTable() {
  tableBody.innerHTML = "";
  scaffoldingData.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nama}</td>
      <td>${item.stok}</td>
      <td>
        <div class="aksi-btn">❌</div>
        <div class="aksi-btn">✏️</div>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

generateTable();

