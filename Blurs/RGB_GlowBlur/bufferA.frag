const int blur_size = 20;
const float blur_width = 1.;

float gauss(float x, float e){
    return exp(-pow(x, 2.)/e);
}



void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;

    vec4 color = texture(iChannel0, uv);
    fragColor = vec4(color.r, 0.,0., 1.);
}