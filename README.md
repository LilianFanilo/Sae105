


URL : https://etudiant.u-pem.fr/~lilian.peuron/

Procédure à faire pour installer le site sur un serveur local XAMPP:
    => Installer puis ouvrer XAMPP
    => Vérifier que les port 80 et 443 sont utilisés dans config
    => Démarrer les modules (Apache, MySQL, FileZilla, Mercury)
    => Entrer la commande \xampp\xampp_start.exe pour lancer le serveur local
    => Aller dans c:\xampp\htdocs et transférer son site.
    => Relever son adresse IP avec ipconfig dans la commande



    => Activer notre site web pédagogique à partir de l'ENT en se rendant sur "https://etudiant.u-pem.fr/ent-services.php?page=web" puis en allant sur Page Web -> Page Web Pedagogique -> Activer mon site Web 
    => Installer FileZilla
    => Paramétrer le avec le mode débogage à 2 ( menu edition/paramètres/débogage)
    => Créer un nouveau site dans le gestionnaire de sites de Filezilla. Ici nous voulons envoyer notre site dans le serveur "etudiant.u-pem.fr". Nous utiliserons donc ces paramètres:
        - Protocole = FTP
        - hôte = etudiant.u-pem.fr
        - Chiffrement = Connexion FTP simple
        - Type d'authentification = demander le mot de passe
        - Identifiant = lilian.peuron
    => Cliquer sur "Connexion" puis entrer le mot de passe
    => Se diriger dans l'arborescence de la fênetre droite dans mnt -> traban_home -> 3bmmc1 -> [identifiant] (ici lilian.peuron) ->WWW
    => Le Site dans WWW