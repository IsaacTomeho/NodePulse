import React, { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';

const Graph = () => {
  const cyContainerRef = useRef(null);
  const [cyInstance, setCyInstance] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [separationCount, setSeparationCount] = useState(0);
  const [pathFound, setPathFound] = useState(true); // New state to track if a path is found

  useEffect(() => {
    
    const cy = cytoscape({
      container: cyContainerRef.current,
      elements: [
        // Updated node data with dummy names
        { group: 'nodes', data: { id: 'Sarthak_Chand' } },
        { group: 'nodes', data: { id: 'Wil_Secord' } },
        { group: 'nodes', data: { id: 'Andrei_Tietjen'} },
        { group: 'nodes', data: { id: 'Will_Titus'} },
        { group: 'nodes', data: { id: 'Chloe_Halverson'} },
        { group: 'nodes', data: { id: 'Wynn_Chen'} },
        { group: 'nodes', data: { id: 'Jared_Vazzana'} },
        { group: 'nodes', data: { id: 'Theo_King'} },
        { group: 'nodes', data: { id: 'Alex_Hirth'} },
        { group: 'nodes', data: { id: 'Philip_Tierney'} },
        { group: 'nodes', data: { id: 'Mason_Trottier'} },
        { group: 'nodes', data: { id: 'Isaac_Tomeho'} },
        { group: 'nodes', data: { id: 'Audrey_Roller'} },
        { group: 'nodes', data: { id: 'Blake_Shea'} },
        { group: 'nodes', data: { id: 'Liam_Wang'} },
        { group: 'nodes', data: { id: 'Aidan_Keefe'} },
        { group: 'nodes', data: { id: 'Nicholas_Johnson'} },
        { group: 'nodes', data: { id: 'Lev_Roland-Kalb'} },
        { group: 'nodes', data: { id: 'Luke_Sheldon'} },
        { group: 'nodes', data: { id: 'Henry_Kuerbis'} },
        { group: 'nodes', data: { id: 'Kevin_Braunwart'} },
        { group: 'nodes', data: { id: 'John_Sayles'} },
        { group: 'nodes', data: { id: 'Ben_Klein'} },
        { group: 'nodes', data: { id: 'Emily_Rosenbaum'} },
        { group: 'nodes', data: { id: 'Aniket_Pandey'} },
        { group: 'nodes', data: { id: 'Minh_Ngo'} },
        { group: 'nodes', data: { id: 'Prustide_Bangandozou'} },
        { group: 'nodes', data: { id: 'Eric_Litvack-Winkler'} },
        { group: 'nodes', data: { id: 'Jaden_Lewis'} },
        { group: 'nodes', data: { id: 'Kai_Borwell'} },
        { group: 'nodes', data: { id: 'Diego_Marin'} },
        { group: 'nodes', data: { id: 'Mauro_Perez-Colon'} },
        { group: 'nodes', data: { id: 'Amechi_Aduba'} },
        { group: 'nodes', data: { id: 'Eric_Litvack-Winkler'} },

      
        // ... other nodes

        // Edges without weights
        { group: 'edges', data: { source: 'Sarthak_Chand', target: 'Aniket_Pandey' } },
        { group: 'edges', data: { source: 'Sarthak_Chand', target: 'Minh_Ngo' } },
        { group: 'edges', data: { source: 'Wil_Secord', target: 'Chloe_Halverson' } },
        { group: 'edges', data: { source: 'Wil_Secord', target: 'Will_Titus' } },
        { group: 'edges', data: { source: 'Wil_Secord', target: 'Alex_Hirth' } },
        { group: 'edges', data: { source: 'Andrei_Tietjen', target: 'Philip_Tierney' } },
        { group: 'edges', data: { source: 'Andrei_Tietjen', target: 'Jared_Vazzana' } },
        { group: 'edges', data: { source: 'Andrei_Tietjen', target: 'Mason_Trottier' } },
        { group: 'edges', data: { source: 'Andrei_Tietjen', target: 'Alex_Hirth' } },
        { group: 'edges', data: { source: 'Will_Titus', target: 'Wil_Secord' } },
        { group: 'edges', data: { source: 'Will_Titus', target: 'Chloe_Halverson' } },
        { group: 'edges', data: { source: 'Will_Titus', target: 'Theo_King' } },
        { group: 'edges', data: { source: 'Will_Titus', target: 'Wynn_Chen' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Will_Titus' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Wil_Secord' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Theo_King' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Wynn_Chen' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Isaac_Tomeho' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Audrey_Roller' } },
        { group: 'edges', data: { source: 'Chloe_Halverson', target: 'Blake_Shea' } },
        { group: 'edges', data: { source: 'Jared_Vazzana', target: 'Philip_Tierney' } },
        { group: 'edges', data: { source: 'Jared_Vazzana', target: 'Andrei_Tietjen' } },
        { group: 'edges', data: { source: 'Liam_Wang', target: 'Lev_Roland-Kalb' } },
        { group: 'edges', data: { source: 'Liam_Wang', target: 'Aidan_Keefe' } },
        { group: 'edges', data: { source: 'Liam_Wang', target: 'Blake_Shea' } },
        { group: 'edges', data: { source: 'Liam_Wang', target: 'Audrey_Roller' } },
        { group: 'edges', data: { source: 'Liam_Wang', target: 'Nicholas_Johnson' } },
        { group: 'edges', data: { source: 'Liam_Wang', target: 'Prustide_Bangandozou' } },
        { group: 'edges', data: { source: 'Luke_Sheldon', target: 'Henry_Kuerbis' } },
        { group: 'edges', data: { source: 'Luke_Sheldon', target: 'Kevin_Braunwart' } },
        { group: 'edges', data: { source: 'John_Sayles', target: 'Ben_Klein' } },
        { group: 'edges', data: { source: 'Eric_Litvack-Winkler', target: 'Emily_Rosenbaum' } },
        { group: 'edges', data: { source: 'Eric_Litvack-Winkler', target: 'Lev_Roland-Kalb' } },
        { group: 'edges', data: { source: 'Eric_Litvack-Winkler', target: 'Audrey_Roller' } },
        { group: 'edges', data: { source: 'Eric_Litvack-Winkler', target: 'Kevin_Braunwart' } },
        { group: 'edges', data: { source: 'Eric_Litvack-Winkler', target: 'Liam_Wang' } },
        { group: 'edges', data: { source: 'Emily_Rosenbaum', target: 'Eric_Litvack-Winkler' } },
        { group: 'edges', data: { source: 'Emily_Rosenbaum', target: 'Audrey_Roller' } },
        { group: 'edges', data: { source: 'Emily_Rosenbaum', target: 'Lev_Roland-Kalb' } },
        { group: 'edges', data: { source: 'Emily_Rosenbaum', target: 'Kevin_Braunwart' } },
        { group: 'edges', data: { source: 'Emily_Rosenbaum', target: 'Isaac_Tomeho' } },
        { group: 'edges', data: { source: 'Jaden_Lewis', target: 'Kevin_Braunwart' } },
        { group: 'edges', data: { source: 'Jaden_Lewis', target: 'Kai_Borwell' } },
        { group: 'edges', data: { source: 'Jaden_Lewis', target: 'Wynn_Chen' } },
        { group: 'edges', data: { source: 'Diego_Marin', target: 'Isaac_Tomeho' } },
        { group: 'edges', data: { source: 'Diego_Marin', target: 'Henry_Kuerbis' } },
        { group: 'edges', data: { source: 'Diego_Marin', target: 'Mauro_Perez-Colon' } },
        { group: 'edges', data: { source: 'Diego_Marin', target: 'Luke_Sheldon' } },
        { group: 'edges', data: { source: 'Diego_Marin', target: 'Alex_Hirth' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Isaac_Tomeho' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Mauro_Perez-Colon' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Henry_Kuerbis' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Kai_Borwell' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Wynn_Chen' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Diego_Marin' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Prustide_Bangandozou' } },
        { group: 'edges', data: { source: 'Amechi_Aduba', target: 'Lev_Roland-Kalb' } },
        { group: 'edges', data: { source: 'Alex_Hirth', target: 'Mason_Trottier' } },
        { group: 'edges', data: { source: 'Alex_Hirth', target: 'Philip_Tierney' } },
        { group: 'edges', data: { source: 'Kevin_Braunwart', target: 'Jaden_Lewis' } },
        { group: 'edges', data: { source: 'Kevin_Braunwart', target: 'John_Sayles' } },
        { group: 'edges', data: { source: 'Kevin_Braunwart', target: 'Eric_Litvack-Winkler' } },
        { group: 'edges', data: { source: 'Kevin_Braunwart', target: 'Emily_Rosenbaum' } },
        { group: 'edges', data: { source: 'Kevin_Braunwart', target: 'Audrey_Roller' } },
        { group: 'edges', data: { source: 'Henry_Kuerbis', target: 'Amechi_Aduba' } },
        
        
        // ... other edges
      ],
      style: [ {
        selector: 'node',
        style: {
          'background-color': '#69e',
          'label': 'data(id)',
          'text-valign': 'center',
          'color': 'white',
          'text-outline-width': 2,
          'text-outline-color': '#888',
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#369',
          'target-arrow-color': '#369',
          'target-arrow-shape': 'triangle',
        }
      },
      {
        selector: '.highlighted',
        style: {
          'background-color': '#f00', // Red color for highlighted nodes
          'line-color': '#f00', // Red color for edges leading to highlighted nodes
          'target-arrow-color': '#f00',
          'transition-property': 'background-color, line-color, target-arrow-color',
          'transition-duration': '0.5s'
        }
      },
      {
        selector: '.origin',
        style: {
          'background-color': '#00f', // Blue for the origin node
        }
      },{
        selector: '.current-visited',
        style: {
          'background-color': '#006400', // Dark green for the start node
        }
      },
      {
        selector: '.visited',
        style: {
          'background-color': '#808080', // Gray for visited nodes
          'line-color': '#FF0000', // Gray for visited edges
        }
      },
      {
        selector: '.path',
        style: {
          'background-color': '#ff0000', // Red for the end node
        }
      },
      {
        selector: '.destination',
        style: {
          'background-color': '#f00', // Red for the destination node
        }
      }, ],
      layout: { name: 'cose',
      idealEdgeLength: 100,
      nodeOverlap: 20,
      refresh: 20,
      fit: true,
      padding: 30,
      randomize: false,
      componentSpacing: 100,
      nodeRepulsion: (node) => 400000,
      edgeElasticity: (edge) => 100,
      nestingFactor: 5,
      gravity: 80,
      numIter: 1000,
      initialTemp: 200,
      coolingFactor: 0.95,
      minTemp: 1.0 }
    });
    

    setCyInstance(cy);
    

    console.log('Cytoscape instance created');

    return () => {
      console.log('Destroying Cytoscape instance');
      cy.destroy();
    };
  }, []);
  
  useEffect(() => {
    if (cyInstance) {
      // Reset classes first
      cyInstance.elements().removeClass('origin destination');
  
      // Format IDs and add classes
      const formattedOrigin = formatId(origin);
      const formattedDestination = formatId(destination);
  
      if (formattedOrigin) cyInstance.$(`#${formattedOrigin}`).addClass('origin');
      if (formattedDestination) cyInstance.$(`#${formattedDestination}`).addClass('destination');
    }
  }, [cyInstance, origin, destination]);
 

  const formatId = (id) => {
    return id.replace(/\s/g, '_'); // Replace spaces with underscores
  };
  
  const performBFS = () => {
    if (!cyInstance || !origin || !destination) return;
  
    if (!cyInstance.$(`#${origin}`).length || !cyInstance.$(`#${destination}`).length) {
      console.error('Origin or destination node not found');
      setPathFound(false);
      setSeparationCount(0);
      return;
    }
  
    setPathFound(true);
    cyInstance.elements().removeClass('highlighted visited current-visited path');
  
    let visited = new Set();
    let path = new Map();
    let queue = [{ node: cyInstance.$(`#${origin}`), depth: 0 }];
    let found = false;
  
    cyInstance.$(`#${origin}`).addClass('current-visited');
    path.set(origin, [origin]);
  
    const visitNode = (elem, depth) => {
      elem.addClass('visited').removeClass('current-visited');
      elem.connectedEdges().addClass('visited');
      setSeparationCount(depth);
      if (elem.id() === destination) {
        found = true;
        cyInstance.$(`#${destination}`).addClass('path');
        highlightShortestPath(path.get(destination));
      }
    };
  
    const highlightShortestPath = (pathArray) => {
      cyInstance.elements().removeClass('visited current-visited path');
      pathArray.forEach(id => {
        cyInstance.$(`#${id}`).addClass('highlighted');
      });
    };
  
    const stepThroughBFS = () => {
      if (queue.length === 0 || found) {
        if (!found) {
          setPathFound(false);
        }
        return;
      }
  
      let current = queue.shift();
      let currentNode = current.node;
      let currentDepth = current.depth;
  
      if (!visited.has(currentNode.id())) {
        visitNode(currentNode, currentDepth);
        visited.add(currentNode.id());
  
        currentNode.neighborhood('node').forEach(neighbor => {
          if (!visited.has(neighbor.id())) {
            queue.push({ node: neighbor, depth: currentDepth + 1 });
            if (!path.has(neighbor.id())) {
              let newPath = path.get(currentNode.id()).concat([neighbor.id()]);
              path.set(neighbor.id(), newPath);
            }
          }
        });
      }
  
      setTimeout(stepThroughBFS, 1000); // Adjust time as needed
    };
  
    stepThroughBFS();
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ margin: '10px', textAlign: 'center', zIndex: 1 }}>
        <label>Origin:</label>
        {!pathFound && <p>No path to this destination found</p>}
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        <label>Destination:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        <button onClick={() => cyInstance && performBFS()}>Search</button>
        <p>Degrees of Separation: {separationCount}</p>
      </div>
      <div ref={cyContainerRef} style={{ flexGrow: 1, zIndex: 0 }} />
    </div>
  );
};

export default Graph;