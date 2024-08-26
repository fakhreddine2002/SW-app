const fs = require('fs');
const path = require('path');

const libraries = [
  {
    path: path.join(__dirname, '..', 'Package App', 'node_modules', '@fakhreddine', 'my-component-library', 'src', 'components'),
    name: '@fakhreddine/my-component-library'
  },
  {
    path: path.join(__dirname, '..', 'Package App', 'node_modules', '@malekboubaker', 'my-components', 'src', 'components'),
    name: '@malekboubaker/my-components'
  }
];

function extractComponents(library) {
  try {
    const components = [];
    const files = fs.readdirSync(library.path);

    files.forEach(file => {
      const filePath = path.join(library.path, file);
      if (fs.statSync(filePath).isFile()) {
        if (file.endsWith('.vue')) {
          components.push({
            name: path.basename(file, path.extname(file)),
            description: `A component from the ${library.name} library.`,
            library: library.name
          });
        }
      }
    });

    console.log(`Components extracted from ${library.name}:`, components);
    return components;
  } catch (error) {
    console.error(`Failed to extract components from ${library.name}:`, error);
    return [];
  }
}

const allComponents = libraries.flatMap(library => extractComponents(library));

fs.writeFileSync('data.json', JSON.stringify(allComponents, null, 2));
console.log('Components have been extracted and saved to data.json');
