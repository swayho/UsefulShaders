#define DIV 200.

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    uv *= DIV;
    uv = floor(uv);
    uv /= DIV;
    fragColor = texture(iChannel0, uv);
}