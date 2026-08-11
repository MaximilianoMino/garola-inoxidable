import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

type EmailTemplateProps = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export default function EmailTemplate({
  name,
  company,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4" }}
      >
        <Container style={{ backgroundColor: "#ffffff", padding: "24px" }}>
          <Heading style={{ color: "#DC2828" }}>
            Nueva consulta desde el sitio web
          </Heading>

          <Text>
            <strong>Nombre:</strong> {name}
          </Text>
          <Text>
            <strong>Empresa:</strong> {company}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Hr />

          <Text>
            <strong>Mensaje:</strong>
            <br />
            {message}
          </Text>

          <Hr />

          <Text>Equipo Garola Inoxidable</Text>
        </Container>
      </Body>
    </Html>
  );
}
