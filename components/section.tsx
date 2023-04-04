export const Section = props => <section>
  <h3 id={encodeURIComponent(props.title)}>{props.title}</h3>
  {props.children}
</section>