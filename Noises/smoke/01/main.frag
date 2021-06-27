/*
** https://www.shadertoy.com/view/tl2GRG
** Auther : Canysway
*/ 

#define DIV 150.

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    vec2 origin = uv;
    vec4 noise = texture(iChannel2 ,uv);
    vec4 noise2 = texture(iChannel1, uv);

    vec4 rColor = texture(iChannel0, origin + (noise.r * 0.015));
    vec4 gColor = texture(iChannel0, origin - (noise.g * 0.015));
    vec4 bColor = texture(iChannel0, origin - (noise.b * 0.015));
    vec4 rColor2 = texture(iChannel0, origin + (noise.r * 0.03));
    vec4 gColor2 = texture(iChannel0, origin - (noise.g * 0.03));
    vec4 bColor2 = texture(iChannel0, origin + (noise.b * 0.03));
    vec4 rColor3 = texture(iChannel0, origin + (noise.r * 0.02));
    vec4 gColor3 = texture(iChannel0, origin - (noise.g * 0.02));
    vec4 bColor3 = texture(iChannel0, origin - (noise.b * 0.02));
    fragColor = (rColor + gColor + bColor + rColor2 + gColor2 + bColor2 + rColor3 + gColor3 + bColor3)/9.;
}
