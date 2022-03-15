//lembrar desse conteúdo linhas 1,2,3,4 os atributos sempre tema referencia na frentecomo this.raio
class Particle{
constructor(x,y){
this.raio=10
this.body=Bodies.circle(x,y,this.raio,{restitution:0.4})
this.color=color(random(0,255),random(0,255), random(0,255));
World.add(world,this.body)
}
display(){
    push()
    fill(this.color)
    ellipse(this.body.position.x,this.body.position.y,this.raio) 
    pop()

}
}
