import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import * as THREE from 'three';

// import { OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-box',
  standalone: true,
  imports: [],
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.css'
})
export class CanvasBoxComponent implements OnInit{
  name='angular';
  @ViewChild('canava',{static: true}) canava!: ElementRef<HTMLCanvasElement>

  // @ViewChild('canvas',{static:true}) canava: ElementRef<HTMLCanvasElement>;
  renderer:Renderer2;
  constructor(renderer:Renderer2){
    this.renderer=renderer;
  }

  ngOnInit(): void {
    const scene=new THREE.Scene();
    const camrea = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
    const renderer= new THREE.WebGLRenderer();
    // this.createThreeJsBox();

    const canvas = this.canava.nativeElement;
    const rect = canvas.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    this.canava.nativeElement.appendChild(renderer.domElement);
    const canavs= this.canava.nativeElement;
    const render =this.renderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    // this.div.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camrea);
    };
    camrea.position.z = 5;
    renderer.render(scene, camrea);
    animate();
  }
  
}
