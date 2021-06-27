const int blur_size = 30;
const float blur_width = 4.;

float gauss(float x, float e){
    return exp(-pow(x, 2.)/e);
}



void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    vec4 pixval = vec4(0.);
   	float tot = 0.;

	int nb = 2*blur_size+1;

   	for (int x=0; x<nb; x++){
       float x2 = blur_width*float(x-blur_size);
       vec2 ipos = uv + vec2(x2/iResolution.x, 0.);
       float g = gauss(x2, float(400*blur_size)*(0.3));
       pixval+= g*texture(iChannel0, ipos + vec2(0., .01));
       tot+= g;
   	}
    vec4 color = pixval/tot;
    fragColor = vec4(0., color.g, 0., 1.);
}