# Gauss - Jacques

Method to obtain modular inverse matrices sized n x n considering
computational efficiency and applications in symmetric cryptography. It is also discussed about some phenomenon in linear arithmetic spaces and some theorems found. This work is an important contribution to knowledge and direct appliance in
data security problems in computer science context. Based on research and experiments conducted, it was observed that this method is precise, defined and finite, so it can be programmed in any computer language. 

[The proposed Gauss-Jacques method to obtain modular inverse matrices variable sized without a theoretical limit.](https://www.researchgate.net/publication/327895519_The_proposed_Gauss-Jacques_method_to_obtain_modular_inverse_matrices_variable_sized_without_a_theoretical_limit)

## Installation

This is a Node.js module.

Installation is done using the npm install command:

```
    npm i gauss-jacques
```

## Example of use

```javascript

// Import the module
const GaussJacques = require( 'gauss-jacques' );

// Let K a (N x N) matrix
let K =
    [ [ 42, 97, 23 ],
    [ 51, 30, 77 ],
    [ 33, 7, 66 ] ];

// Let m a prime number, referred as modulo.
const m = 89;

// Calculate the inverModular of K
let invK = GaussJacques.inverseModular( K, m );

// result:
console.log(invK);

    [ [ 79, 85, 54 ], 
    [ 56, 20, 3 ], 
    [ 53, 70, 59 ] ];


```

The main function is:

<img src="https://bitbucket.org/adolfo_s94/gauss-jacques/raw/a6c723de9ccb6b283384ad3b5aaa79340658cb3b/carbon.png">


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors

- Code:
    * [Adolfo Solis-Rosas](adolfo2794@gmail.com)

- Author of the Gauss-Jacques method:
    * [Fausto Abraham Jacques-García](jacques@uaq.edu.mx)


