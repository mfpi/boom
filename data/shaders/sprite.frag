#version 330
out vec4 color;

in vec2 texCoordsFinal;
flat in int imageFinal;

uniform sampler2D Texture0;
uniform sampler2D Texture1;
uniform sampler2D Texture2;
uniform sampler2D Texture3;
uniform sampler2D Texture4;
uniform sampler2D Texture5;
uniform sampler2D Texture6;
uniform sampler2D Texture7;
uniform sampler2D Texture8;
uniform sampler2D Texture9;
uniform sampler2D Texture10;
uniform sampler2D Texture11;
uniform sampler2D Texture12;


void main()
{
  vec2 texCoords = texCoordsFinal;
	switch (imageFinal) {
		case 0:
			color = texture(Texture0, texCoords);
			break;
		case 1:
			color = texture(Texture1, texCoords);
			break;
		case 2:
			color = texture(Texture2, texCoords);
			break;
		case 3:
			color = texture(Texture3, texCoords);
			break;
		case 4:
			color = texture(Texture4, texCoords);
			break;
		case 5:
			color = texture(Texture5, texCoords);
			break;
		case 6:
			color = texture(Texture6, texCoords);
			break;
		case 7:
			color = texture(Texture7, texCoords);
			break;
		case 8:
			color = texture(Texture8, texCoords);
			break;
		case 9:
			color = texture(Texture9, texCoords);
			break;
		case 10:
			color = texture(Texture10, texCoords);
			break;
		case 11:
			color = texture(Texture11, texCoords);
			break;
		case 12:
			color = texture(Texture12, texCoords);
			break;
		default:
			color = vec4(0, 0, 0, 1);
	}
}
