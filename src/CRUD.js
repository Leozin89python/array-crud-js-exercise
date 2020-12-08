//declaração
people = []
products = []
places = []
//verificação
console.log(typeof(people))
console.log(typeof(products))
console.log(typeof(places))

//adição
people.push('Leona')
people.push('Laura')
people.push('Lenice')
people.push('Leticia')
people.push('Ricardo')
people.push('João')
people.push('Luan')
//remoção
people.splice(4,1)
//leitura
console.log(people)

//adição
products.push('açúcar')
products.push('óleo')
products.push('azeite')
products.push('pão')
products.push('sal')
products.push('mel')
products.push('cerveja')
products.splice(4,1)
//leitura
console.log(products)

//adição
places.push('New york')
places.push('Israel')
places.push('Fernando de Noronha')
places.push('Morro de São Paulo')
places.push('Nagoya')
places.push('Honshu')
places.push('Leblon')
places.push('Madri')
places.push('Lion')
places.push('Nevada')
places.push('Chicago')
places.push('Bogotá')
places.push('Lisboa')
//remoção
places.splice(6,1)
places.splice(10,1)
//leitura
console.log(places)

//objects
//declaração
person = [{}]
product = [{}]
place = [{}]
//verificação
console.log(typeof(person))
console.log(typeof(product))
console.log(typeof(place))

//adição
person.push({nome:'Vanessa',idade:17,status:'solteira'})
person.push({nome:'Vania',idade:27,status:'casada'})
person.push({nome:'Paulo',idade:31,status:'casado'})
person.push({nome:'',idade:null,status:''})
person.push({nome:'Myuki',idade:19,status:'solteira'})
//remoção
person.splice(3,1)
//leitura
console.log(person)
//adição
product.push({item:'arroz',preco:'7,65R$',qntdd:654})
product.push({item:'feijão',preco:'9,65R$',qntdd:744})
product.push({item:'sal',preco:null ,qntdd:0})
product.push({item:'frango',preco:'13,00R$/kg',qntdd:90})
product.push({item:'açúcar',preco:'1,15R$',qntdd:150})
//remoção
product.splice(2,1)
//leitura
console.log(product)

//adição
place.push({pais:'França',cidade:'Lion'})
place.push({pais:'USA',cidade:'Los Angeles'})
place.push({pais:'Japão',cidade:'fukuoka'})
place.push({pais:'Líbano',cidade:'Beirute'})
place.push({pais:'Brasil',cidade:'Salvador'})
//remoção
place.splice(0,1)
//leitura
console.log(place)

//filtros
const lugar = place.map(e     =>e.pais)
const precificado = product.map(e   => e.preco == '7,65R$'  )
const price = product.map(e   => e.preco  )
pessoa = person.map(e   => e.nome && e.idade? e.idade >=20 : e.idade <=20 )
nome = person.filter(e  => e.nome)
//leitura
console.log(lugar,precificado,price)
console.log(pessoa,nome)


