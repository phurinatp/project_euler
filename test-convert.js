
let input = {
    products: [
        {
            variants: ['souffle', 'cake', 'ice-cream']
        },
        {
            variants: ['cherry', 'choco']
        },
        {
            variants: ['XL']
        }
    ]
}

function convert(data) {
    let result = [];
    const [first, ...rest] = data.products;
    const remainder = rest.length > 0 ? convert({ products: rest }) : [[]];
    for (let r of remainder) {
        for (let f of first.variants) result.push(`${f} ${[r].join(' ').trim()}`);
    }
    return result;
  }

console.log(convert(input))
