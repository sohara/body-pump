export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('routines'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
