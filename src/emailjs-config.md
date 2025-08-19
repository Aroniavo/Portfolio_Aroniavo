# Configuration EmailJS

Pour que le formulaire de contact fonctionne et envoie les emails à `ramanoelsonaroniavo@gmail.com`, vous devez configurer EmailJS :

## Étapes de configuration :

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit

### 2. Configurer un service email
- Dans le dashboard, allez dans "Email Services"
- Ajoutez Gmail comme service
- Connectez votre compte Gmail `ramanoelsonaroniavo@gmail.com`

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Créez un nouveau template avec ce contenu :

```
Sujet: Nouveau message de {{from_name}} - {{subject}}

Bonjour Aroniavo,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio web
```

### 4. Récupérer les clés
- Service ID : Dans "Email Services"
- Template ID : Dans "Email Templates" 
- Public Key : Dans "Account" > "General"

### 5. Mettre à jour le code
Remplacez dans `Contact.tsx` :
- `YOUR_SERVICE_ID` par votre Service ID
- `YOUR_TEMPLATE_ID` par votre Template ID  
- `YOUR_PUBLIC_KEY` par votre Public Key

### 6. Test
Le formulaire enverra alors tous les messages directement à `ramanoelsonaroniavo@gmail.com`

## Avantages :
- ✅ Gratuit jusqu'à 200 emails/mois
- ✅ Pas besoin de serveur backend
- ✅ Sécurisé et fiable
- ✅ Interface utilisateur avec feedback visuel