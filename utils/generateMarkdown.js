

//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License:
  [![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
 
  
  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usuage](#usuage)
  *[License](#license)
  *[Contribution](#contribution)
  *[Test](#test)
  *[Questions](#question)

  ## Installation 
  ${data.installation}

  ## Usuage
  ${data.usuage}

  ## License 
  ${data.license}

  ## Contribution 
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions:
  -GitHub: [${data.github}](https://github.com/${data.github})
  -Email: [${data.email}];
  ${data.question}
`;
}

module.exports = generateMarkdown;





// // Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let badge = '';
//   if(license === 'Apache 2.0'){
//     badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
//   } else if(license === 'MIT'){
//     badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`
//   } else if (license === 'Boost 1.0'){
//     badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
//   } else if (license === 'MPL 2.0'){
//     badge = `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
//   } else {
//     badge = ``
//   }
// return badge;
// }

// // Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseLink = '';
//   if(license === 'Apache 2.0'){
//     licenseLink = `https://opensource.org/licenses/Apache-2.0`
//   } else if(license === 'MIT'){
//     licenseLink = `https://opensource.org/licenses/MIT`
//   } else if (license === 'Boost 1.0'){
//     licenseLink = `https://www.boost.org/LICENSE_1_0.txt`
//   } else if (license === 'MPL 2.0'){
//     licenseLink = `https://opensource.org/licenses/MPL-2.0`
//   } else {
//     licenseLink = ''
//   }
// return licenseLink;
// }


// //Create a function that returns the license section of README
// //If there is no license, return an empty string
// function renderLicenseSection(license) {
//   let licenseSection = ''
//   if (license === 'none'){
//     licenseSection = '';
//   }else {
//     licenseSection = `license: ${license}`
//   }
//   return licenseSection;
// }