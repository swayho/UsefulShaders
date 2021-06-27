/*
** https://www.shadertoy.com/view/ts33Wf
** Auther : Canysway
*/ 

#define str 2
#define len 3

mat3 kernel = mat3
(
	0, -3, 0,
	-3, 13, -3,
	0, -3, 0
);


vec3 texturePixSpace(int x, int y, in vec2 fragCoord){
	vec2 uv = (fragCoord.xy + vec2(x * str, y * str)) / iResolution.xy ;
	return texture(iChannel0, uv).xyz;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    vec3 sum = vec3 (0.0, 0.0, 0.0);
    float count = 0.;
    for (int i=0; i < len; i++){
        for(int j=0; j < len; j++){
        	sum += texturePixSpace(i-1, j-1, fragCoord) * kernel[i][j];
            count += float(kernel[i][j]);
        }
    }
    fragColor = vec4(sum/count, 1.0);
}