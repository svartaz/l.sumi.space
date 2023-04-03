export const Section = props => <section>
  <h2 id={encodeURIComponent(props.title)}>{props.title}</h2>
  {props.children}
</section>