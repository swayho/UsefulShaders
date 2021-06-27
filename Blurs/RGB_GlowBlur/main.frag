/*
** https://www.shadertoy.com/view/wlfGRN
** Auther : Canysway
*/ 

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    vec3 red = texture(iChannel0, uv).rgb;
    vec3 green = texture(iChannel1, uv).rgb;
    vec3 blue = texture(iChannel2, uv).rgb;
    vec3 origin = texture(iChannel3, uv).rgb;
    fragColor = vec4((red + green + blue + origin * .3), 1.);
}