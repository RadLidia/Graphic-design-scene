#version 410 core

in vec3 textureCoordinates;
out vec4 color;

uniform samplerCube skybox;
uniform int fogMode;

float computeFog()
{
	float fogDensity = 0.05f;
	float fragmentDistance = 20.0f;
	float fogFactor = exp(-pow(fragmentDistance * fogDensity, 2));
	return clamp(fogFactor, 0.0f, 1.0f);

}

void main()
{	
	vec4 aux_color = texture(skybox, textureCoordinates);

    //fColor = vec4(color, 1.0f);
	float fogFactor = computeFog();
	vec4 fogColor = vec4(0.5f, 0.5f, 0.5f, 1.0f);
	if(fogMode == 0)
		color = aux_color;
	else
		color = fogColor * (1 - fogFactor) + aux_color * fogColor;


}
