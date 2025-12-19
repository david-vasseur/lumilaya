import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Row,
  Column,
} from "@react-email/components";

type OrderItem = {
  name: string;
  price: number;
  qty: number;
};

type OrderEmailProps = {
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  total: number;
  items: OrderItem[];
  shippingAddress: string;
  shippingCity: string;
  shippingPostalCode: string;
  shippingCountry: string;
};

export default function OrderEmail({
  orderId,
  firstName,
  lastName,
  email,
  phone,
  total,
  items,
  shippingAddress,
  shippingCity,
  shippingPostalCode,
  shippingCountry,
}: OrderEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section>
            <Heading style={styles.heading}>
              🛒 Nouvelle commande reçue
            </Heading>

            <Text style={styles.subheading}>
              Commande #{orderId}
            </Text>

            <Hr style={styles.hr} />

            <Text style={styles.sectionTitle}>👤 Client</Text>
            <Text style={styles.text}>
              {firstName} {lastName}
              <br />
              {email}
              <br />
              {phone && <>📞 {phone}</>}
            </Text>

            <Hr style={styles.hr} />

            <Text style={styles.sectionTitle}>📦 Adresse de livraison</Text>
            <Text style={styles.text}>
              {shippingAddress}
              <br />
              {shippingPostalCode} {shippingCity}
              <br />
              {shippingCountry}
            </Text>

            <Hr style={styles.hr} />

            <Text style={styles.sectionTitle}>🧾 Détails de la commande</Text>

            {items.map((item, index) => (
              <Row key={index} style={styles.itemRow}>
                <Column>
                  <Text style={styles.itemName}>
                    {item.qty} × {item.name}
                  </Text>
                </Column>
                <Column align="right">
                  <Text style={styles.itemPrice}>
                    {(item.price * item.qty).toFixed(2)} €
                  </Text>
                </Column>
              </Row>
            ))}

            <Hr style={styles.hr} />

            <Row>
              <Column>
                <Text style={styles.totalLabel}>Total</Text>
              </Column>
              <Column align="right">
                <Text style={styles.totalValue}>
                  {total.toFixed(2)} €
                </Text>
              </Column>
            </Row>

            <Hr style={styles.hr} />

            <Text style={styles.footer}>
              Email automatique — Stripe Webhook
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#0f0f0f",
    margin: 0,
    padding: "40px 0",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    backgroundColor: "#1a1a1a",
    borderRadius: "8px",
    padding: "24px",
    maxWidth: "600px",
  },
  heading: {
    color: "#f97316", // orange
    fontSize: "24px",
    marginBottom: "4px",
  },
  subheading: {
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "16px",
  },
  sectionTitle: {
    color: "#f97316",
    fontSize: "16px",
    marginBottom: "8px",
    marginTop: "16px",
  },
  text: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "20px",
  },
  hr: {
    borderColor: "#333",
    margin: "16px 0",
  },
  itemRow: {
    marginBottom: "8px",
  },
  itemName: {
    color: "#ffffff",
    fontSize: "14px",
  },
  itemPrice: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
  },
  totalLabel: {
    color: "#f97316",
    fontSize: "16px",
    fontWeight: "bold",
  },
  totalValue: {
    color: "#f97316",
    fontSize: "18px",
    fontWeight: "bold",
  },
  footer: {
    color: "#888",
    fontSize: "12px",
    textAlign: "center" as const,
    marginTop: "24px",
  },
};
