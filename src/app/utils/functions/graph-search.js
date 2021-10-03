export { computeSearch };


/**
 * Dummy data
 */

const cities = 'KRK WWA WRO BB GDA GDY SZC POZ LO LU BIA DAR'.split(' ');

const routes = [
  ['KRK', 'WWA'],
  ['KRK', 'WRO'],
  ['KRK', 'BB'],
  ['KRK', 'LU'],
  ['WWA', 'LO'],
  ['WWA', 'GDA'],
  ['GDA', 'GDY'],
  ['GDA', 'GDY'],
  ['GDY', 'BIA'],
  ['GDY', 'SZC'],
  ['SZC', 'DAR'],
]


/**
 * Graph definition
 */

const graph = new Map();

function addNode(city) {
  graph.set(city, []);
}

function addEdge(start, goal) {
  graph.get(start).push(goal);
  graph.get(goal).push(start);
}

/**
 * Graph population
 */

cities.forEach(addNode);

routes.forEach(route => addEdge(...route));


/**
 * Graph search
 */

function breathFirstSeatch(start, target) {

  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const city = queue.shift();
    const destinations = graph.get(city);

    destinations.forEach(d => {
      if (d === target) {
        console.log('Destination reached:', d);
      } else {
        console.log('Destination:', d);
      }

      if (!visited.has(d)) {
        visited.add(d);
        queue.push(d);
      }
    });
  }

}

function depthFirstSearch(start, target, visited = new Set()) {

  const roads = graph.get(start);

  roads.forEach(r => {
    if (r === target) {
      console.log('Destination reached:', r);
    } else {
      console.log('Destination:', r);
    }

    if (!visited.has(r)) {
      visited.add(r);
      breathFirstSeatch(r, start, visited)
    }
  });
}


/**
 * Test
 */

function computeSearch() {

  console.log('===== Breath First =====');
  breathFirstSeatch('BB', 'DAR');

  console.log('===== Depth First =====');
  depthFirstSearch('BB', 'DAR');
}
