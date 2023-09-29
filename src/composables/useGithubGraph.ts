import { ref, onMounted } from 'vue';

export function useGithubGraph(githubUsername: string) {
  const graphSVG = ref<string | null>(null);
  
  onMounted(async () => {
    try {
      const proxy = '',
        url = proxy + `https://github.com/${githubUsername}`,
        colors: Record<string, string> = {
            'eeeeee': 'github-graph-none',
            'd6e685': 'github-graph-litte',
            '8cc665': 'github-graph-some',
            '44a340': 'github-graph-more',
            '1e6823': 'github-graph-most'
        };
        
      const response = await fetch(url);
      const body = await response.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = body;
      
      const graph: any = wrapper.querySelector('svg.js-calendar-graph-svg');
      if(graph){
        const gs = Array.from(graph.querySelectorAll('g g'));
        gs.forEach((g: any, index: number) => {
          if (index < 26) {
            g.parentElement?.removeChild(g);
          } else {
            g.attributes.transform.value = 'translate(' + (13 * (index - 26)) + ', 0)';
          }
        });

        graph.querySelectorAll('rect').forEach((rect: any) => {
          const fill = rect.getAttribute('fill').substring(1);
          if (colors[fill]) {
            rect.classList.add(colors[fill]);
          }
        });

        graph.setAttribute('version', '1.1');
        graph.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        graph.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        graph.setAttribute('xml:space', 'preserve');

        graphSVG.value = graph.outerHTML;
      }
    } catch (error) {
      console.error('Error fetching GitHub graph:', error);
    }
  });

  return {
    graphSVG
  };
}
