void main(){
  vec3 coords = normal;
  coords.y += uTime/10.;
  vec3 noisePattern = vec3(noise(coords));
  vDisplacement = smoothMod(noisePattern.y*5.,1.0,1.5)*1.5 *0.5;
}