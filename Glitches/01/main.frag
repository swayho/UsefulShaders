/*
** https://www.shadertoy.com/view/Wlf3zj
** Auther : Canysway
*/ 

#define PI 3.1415923693
#define TPI PI*2
#define RANGE_Y(a, b, p) step(a, p)*(1. - step(b, p))
#define GLITCH_Y(x, b) (cos(x) + 1.)* b
#define GLITCH_X(x, a, l, h) (sin(x * a) + 1.) * (h - l)
#define LOOP(l, h, d) ((sin(d * PI) + 1.) * (h - l)) + l
#define MIN_R 0.
#define MAX_R 1.

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
	float alpha = RANGE_Y(MIN_R, MAX_R, uv.y);
    float y = uv.y * 38. * PI * LOOP(1., 1.4, iTime * 5.);
    float a = GLITCH_Y(y, .7);
    float dx = GLITCH_X(y, a, .065, .0035);
    float y2 = uv.y * 30. * PI;
    uv.x -= (dx * alpha * GLITCH_Y(y2, 1.) * smoothstep(.9, .95,fract(iTime * 0.7)));
    uv.x -= (.009 * alpha * smoothstep(.9, .95,fract(iTime * 0.4)));
    fragColor = texture(iChannel0, uv);
}