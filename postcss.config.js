import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer'
import prefixer from 'postcss-prefix-selector';

export default {
  plugins:[
    tailwind(tailwindConfig),
    autoprefixer,
    prefixer({
      prefix: 'my-app',
      transform(prefix, selector) {
        if (selector.match(/^()/)) {
           return selector.replace(/^([^\s]*)/, ` ${prefix} $1`);
        }
  
        return selector;
      },
    })
  ]
}