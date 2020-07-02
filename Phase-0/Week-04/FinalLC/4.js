/**
 * ==================
 * Family Information
 * ==================
 *
 * Terdapat sebuah fungsi bernama familyInformation. Fungsi ini akan menerima satu parameter array of object yang merupakan kumpulan anggota keluarga.
 * Setiap object pada array tersebut akan memiliki format:
 *  {
 *    firstName: // Nama depan anggota tersebut,
 *    lstName: // Nama belakang anggota tersebut
 *    yearOfBirth: // Tahun lahir anggota tersebut
 *  }
 *
 * Fungsi familyInformation ini akan mengembalikan sebuah object yang berisikan data:
 * - Anggota keluarga yang paling tua.
 * - Anggota keluarga yang paling muda.
 * - Rata rata umur pda keluarga tersebut.
 *
 * Object yang akan dikembalikan dari fungsi ini memiliki format sebagai berikut:
 * {
 *  oldestMember: {
 *     fullName: // Nama lengkap dari anggota paling tua ( firstName + lastName)
 *     age: // Umur anggota tersebut ( umur pada tahun 2020 )
 *  },
 * youngestMember: {
 *     fullName: // Nama lengkap dari anggota tersebut ( firstName + lastName)
 *     age: // Umur anggota tersebut ( umur pada tahun 2020 )
 *  }
 *  averageAge: // Angka rata rata umur dari keluarga tersebut
 * }
 *
 * Fungsi ini wajib menggunakan modular function, silahkan kalian kerjakan sesuai dengan skeleton code yang sudah dibuat.
 *
 * Fungsi ini juga memiliki satu validasi yang harus kalian penuhi:
 *  - Ketika parameter yang dikirimkan ke dalam fungsi ini adalah array kosong maka tampilkan pesan: Invalid family members
 *
 * Asumsi:
 *  - Tahun yang digunakan untuk mendapatkan umur dari anggota keluarga adalah tahun 2020.
 *
 * Rules:
 *  - Hanya diperbolehkan menggunakan built in function .push(),
 *  - Tidak diperbolehkan menggunakan REGEX
 *
 */

function youngestMember(people) {
  // Find youngest member here

let banding = 0
let obj = {}
let usia = 0
for(let i=0; i<people.length; i++){
  usia = 2020 - people[i].yearOfBirth
  banding = usia;
  if(banding > people[i].yearOfBirth){
    banding = people[i].yearOfBirth
  }
  obj = {
    fullName: `${people[i].firstName} ${people[i].lastName}`,
    age: banding
  }
}
return obj
}
function oldestMember(people) {
  // Find oldest member here
  let banding = 0
  let obj = {}
  let usia = 0
  for(let i=0; i<people.length; i++){
    usia = 2020 - people[i].yearOfBirth
    banding = usia;
    if(banding > people[i].yearOfBirth){
      banding = people[i].yearOfBirth
    }
    obj = {
      fullName: `${people[i].firstName} ${people[i].lastName}`,
      age: people[i].yearOfBirth
    }
  }
  return obj
}
function averageAge(people) {
  // Find average age here
let usia3 = 0
let total = 0
let average = 0
for(let k=0; k<people.length; k++){
  usia3 = 2020 - people[k].yearOfBirth
  total += usia3
}
average = total / people.length
return average

}

function familyInformation(people) {
  const oldest = oldestMember(people)
  const youngest = youngestMember(people)
  const average = averageAge(people)

  const result = {
    oldestMember: oldest,
    youngestMember: youngest,
    averageAge: average
  }
  if(people.length == 0){
    return `Invalid Family Members`
  } else {
    return result

  }
}

let familyMember1 = [
  {
    firstName: 'John',
    lastName: 'Doe',
    yearOfBirth: 1987
  },
  {
    firstName: 'Marry',
    lastName: 'Doe',
    yearOfBirth: 1990
  },
  {
    firstName: 'Christine',
    lastName: 'Doe',
    yearOfBirth: 1997
  },
  {
    firstName: 'Teenage',
    lastName: 'Doe',
    yearOfBirth: 2005
  },
  {
    firstName: 'Baby',
    lastName: 'Doe',
    yearOfBirth: 2015
  }
]
console.log(familyInformation(familyMember1))
/**
 * {
 *  oldestMember: {
 *    fullName: 'John Doe',
 *    age: 33
 *  },
 *  youngestMember: {
 *    fullName: 'Baby Doe',
 *    age: 5
 *  },
 *  averageAge: 21.2
 * }
 */
let familyMember2 = [
  {
    firstName: 'Granny',
    lastName: 'Doe',
    yearOfBirth: 1930
  },
  {
    firstName: 'Aunt',
    lastName: 'Doe',
    yearOfBirth: 1989
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    yearOfBirth: 1987
  },
  {
    firstName: 'Marry',
    lastName: 'Doe',
    yearOfBirth: 1990
  },
  {
    firstName: 'Christine',
    lastName: 'Doe',
    yearOfBirth: 1997
  },
  {
    firstName: 'Teenage',
    lastName: 'Doe',
    yearOfBirth: 2005
  },
  {
    firstName: 'Baby',
    lastName: 'Doe',
    yearOfBirth: 2015
  },
  {
    firstName: 'NewBorn',
    lastName: 'Doe',
    yearOfBirth: 2019
  }
]
console.log(familyInformation(familyMember2))
/**
 * {
 *  oldestMember: {
 *    fullName: 'Granny Doe',
 *    age: 90
 *  },
 *  youngestMember: {
 *    fullName: 'NewBord Doe',
 *    age: 1
 *  },
 *  averageAge: 28.5
 * }
 */

console.log(familyInformation([])) // Invalid family members
