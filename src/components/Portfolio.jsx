import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Button, Modal, Carousel } from 'react-bootstrap';
import { FaMobileAlt, FaGlobe, FaRobot, FaDumbbell, FaHeartbeat, FaSeedling, FaBuilding, FaWhatsapp } from 'react-icons/fa';

const projects = [
  {
    id: 9,
    title: "WhatsApp Flow Automation & Analytics",
    description: "Built end-to-end WhatsApp Flow (Meta) automations with encrypted protocol integration for appointment/installation scheduling, plus a full-stack operational analytics dashboard with two-level multi-tenant access control.",
    tech: ["Node.js/TypeScript", "React", "Java/Spring Boot", "Docker", "Kubernetes"],
    icon: <FaWhatsapp size={80} className="text-primary" />,
    role: "Full Stack",
    demoCode: `
// WHATSAPP FLOW - ENCRYPTED DATA EXCHANGE
async function decryptFlowRequest(body: EncryptedFlowRequest) {
  const aesKey = decryptRSA_OAEP(body.encrypted_aes_key);
  const payload = decryptAES128GCM(
    body.encrypted_flow_data,
    aesKey,
    body.initial_vector
  );
  return JSON.parse(payload);
}
// Orchestrates scheduling logic against partner API (VTAL)
    `,
    language: "typescript"
  },
  {
    id: 8,
    title: "Enterprise SaaS: Events & Restaurant ERP",
    description: "Evolutive development of two production SaaS platforms in .NET/C#: a multi-tenant graduation event management system with Itaú boleto/webhook integration, and a restaurant ERP/POS where I led a security refactor enforcing multi-tenant data isolation.",
    tech: [".NET/C#", "EF Core", "PostgreSQL", "React/TypeScript", "Next.js", "xUnit"],
    icon: <FaBuilding size={80} className="text-primary" />,
    role: "Full Stack",
    demoCode: `
// MULTI-TENANT DATA ISOLATION (EF Core query filter)
public class TenantQueryFilter
{
    public static void Apply(ModelBuilder builder, int companyId)
    {
        builder.Entity<Order>()
            .HasQueryFilter(o => o.CompanyId == companyId);
        // Company claim resolved from JWT, applied globally
        // to eliminate cross-tenant data leakage risk
    }
}
    `,
    language: "csharp"
  },
  {
    id: 7,
    title: "Precision Agriculture Suite (Mobile + SaaS)",
    description: "Led an architectural migration to Feature-Sliced Design across three offline-first React Native apps for the agriculture sector, plus a full-stack precision-agriculture SaaS with satellite-based vegetation index analysis.",
    tech: ["React Native", "Django REST Framework", "Celery", "Redis", "Google Earth Engine", "SQLite"],
    icon: <FaSeedling size={80} className="text-primary" />,
    role: "Mobile Lead & Full Stack",
    demoCode: `
# NDVI CALCULATION (Sentinel-2 via Google Earth Engine)
def calculate_ndvi(image):
    nir = image.select('B8')
    red = image.select('B4')
    ndvi = nir.subtract(red).divide(nir.add(red))
    return ndvi.rename('NDVI')

# Async pipeline: Celery task fetches Sentinel-2 imagery,
# computes NDVI/NDWI/EVI for georeferenced field polygons,
# results synced to offline-first mobile clients (SQLite)
    `,
    language: "python"
  },
  {
    id: 1,
    title: "FitMentoring SaaS Platform",
    description: "Production SaaS for personal trainers. Lead Mobile Developer (React Native/Expo) & Full Stack Contributor. Features multi-tenancy, RBAC, Stripe payments, and complex workout builders.",
    tech: ["React Native", "NestJS", "TypeScript", "Stripe", "PostgreSQL", "AWS S3"],
    icon: <FaDumbbell size={80} className="text-primary" />,
    role: "Lead Mobile & Full Stack",
    link: "https://fitmentoring.com/",
    demoCode: `
// ROLES GUARD (NestJS - RBAC)
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    // Check if user has required role (Admin, Trainer, Student)
    // Supports multi-tenant context validation
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
    `,
    language: "typescript"
  },
  {
    id: 6,
    title: "AI-Powered Medical Image Segmentation",
    description: "Ethics-committee-approved research project (CEP/UFU): end-to-end deep learning pipeline for automatic prostate segmentation on planning CT scans for radiotherapy, developed in collaboration with radiation oncologists and medical physicists at HC-UFU.",
    tech: ["Python", "PyTorch", "DICOM", "U-Net", "ONNX", "INT8 Quantization"],
    icon: <FaHeartbeat size={80} className="text-primary" />,
    role: "ML Research & Development",
    demoCode: `
# DICE COEFFICIENT (validation metric)
def dice_coefficient(pred, target, eps=1e-6):
    pred = pred.contiguous().view(-1)
    target = target.contiguous().view(-1)

    intersection = (pred * target).sum()
    dice = (2. * intersection + eps) / (
        pred.sum() + target.sum() + eps
    )
    return dice

# Best validation Dice achieved: 0.87
# Pipeline: DICOM series -> HU normalization ->
# RTSTRUCT contour extraction -> U-Net 2D training ->
# ONNX export + INT8 quantization for CPU inference
    `,
    language: "python"
  },
  {
    id: 2,
    title: "Mobile Applications Suite",
    description: "Two production React Native apps: AI-powered nutrition assistant with Gemini AI integration and Bluetooth-enabled animal management system with PDF reporting.",
    tech: ["React Native", "Gemini AI", "Bluetooth", "PDF Generation", "SQLite", "Context API"],
    icon: <FaMobileAlt size={80} className="text-primary" />,
    role: "Mobile App",
    demoCode: `
// CUSTOM COMPONENT RENDER
const UserProfile = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user.avatar }} 
        style={styles.avatar} 
      />
      <Text style={styles.name}>{user.name}</Text>
      <Button 
        title="Edit Profile" 
        onPress={handleEdit} 
      />
    </View>
  );
};
    `,
    language: "jsx"
  },
  {
    id: 3,
    title: "Web Development & DevOps",
    description: "Full-stack web solutions and deployment pipelines. Built responsive websites, managed domains/SSL, and deployed on Vercel/Turbo Cloud for clients.",
    tech: ["React", "Node.js", "Vercel", "Cloudflare", "PostgreSQL", "CI/CD"],
    icon: <FaGlobe size={80} className="text-primary" />,
    role: "Full Stack",
    demoCode: `
// API ROUTE HANDLER (Express)
router.post('/api/orders', authMiddleware, async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = await OrderService.create({
      userId: req.user.id,
      items,
      total,
      status: 'pending'
    });
    
    // Trigger real-time update
    io.to(req.user.id).emit('order_created', order);
    
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Order creation failed' });
  }
});
    `,
    language: "javascript"
  },
  /* {
     id: 4,
     title: "Process Automation Engine",
     description: "Custom automation scripts that eliminated 70% of manual tasks for clients through data extraction, report generation, and system integration using Python/Node.js.",
     tech: ["Python", "Node.js", "Web Automation", "Task Scheduling", "API Integration"],
     icon: <FaRobot size={80} className="text-primary" />,
     role: "Automation",
     demoCode: `
 # BUSINESS PROCESS AUTOMATION PIPELINE
 class AutomationPipeline:
     def __init__(self):
         self.data_sources = []
         self.report_queue = []
     
     def extract_client_data(self):
         """Unify data from multiple client systems"""
         sources = {
             'crm': self._query_api('https://api.client-crm.com/v1/data'),
             'database': self._execute_sql('SELECT * FROM daily_metrics'),
             'spreadsheets': self._parse_excel_files('/reports/')
         }
         
         # Data validation and cleaning
         validated = self._validate_data(sources)
         return self._normalize_formats(validated)
     
     def generate_automated_reports(self, data):
         """Create multiple report formats from single data source"""
         reports = {
             'excel': self._create_excel_report(data),
             'pdf': self._generate_pdf_summary(data),
             'dashboard': self._update_powerbi_dataset(data)
         }
         
         # Queue for delivery
         for format, report in reports.items():
             self.report_queue.append({
                 'format': format,
                 'content': report,
                 'timestamp': datetime.now()
             })
         
         return len(self.report_queue)
     
     def deliver_reports(self):
         """Automated delivery to client systems"""
         delivered = []
         for report in self.report_queue:
             # Upload to client cloud storage
             cloud_path = self._upload_to_s3(report['content'])
             
             # Send email notification
             self._send_email_alert(
                 recipients=['client@email.com'],
                 subject=f"Automated Report - {report['format'].upper()}",
                 attachment_path=cloud_path
             )
             
             delivered.append({
                 'format': report['format'],
                 'status': 'delivered',
                 'path': cloud_path
             })
         
         # Clear queue after successful delivery
         self.report_queue = []
         return delivered
 
 # CLIENT USAGE EXAMPLE
 pipeline = AutomationPipeline()
 client_data = pipeline.extract_client_data()
 report_count = pipeline.generate_automated_reports(client_data)
 delivery_confirmation = pipeline.deliver_reports()
 print(f" Automated {report_count} reports, delivered to client.")
     `,
     language: "python"
   } */
];

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  // On small screens, show 1 project per slide (full card, no nested
  // vertical stacking/scrolling inside the carousel); on md+ screens,
  // group 3 per slide to match the original grid layout.
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767.98px)');
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handleChange);
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const slidesOf = isMobile ? 1 : 3;
  const slides = [];
  for (let i = 0; i < projects.length; i += slidesOf) {
    slides.push(projects.slice(i, i + slidesOf));
  }

  return (
    <section id="portfolio" className="py-5" style={{ backgroundColor: 'var(--surface-color)' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Selected Projects</h2>
          <p className="lead text-secondary">A collection of my recent work and experiments</p>
        </div>

        <Carousel indicators={true} interval={null} className="portfolio-carousel">
          {slides.map((slide, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="px-5 pb-5">
              <Row className="g-4">
                {slide.map((project) => (
                  <Col key={project.id} lg={4} md={6} sm={12}>
                    <Card className="h-100 shadow-sm border-0 hover-scale" style={{ backgroundColor: 'var(--bg-color)', transition: 'transform 0.3s ease' }}>
                      <div className="d-flex align-items-center justify-content-center portfolio-icon-box" style={{ backgroundColor: 'var(--surface-color)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        {project.icon}
                      </div>
                      <Card.Body className="d-flex flex-column p-4">
                        <div className="mb-2">
                          <Badge bg="primary" className="me-2">{project.role}</Badge>
                        </div>
                        <Card.Title className="fw-bold fs-5 mb-3">{project.title}</Card.Title>
                        <Card.Text className="text-secondary flex-grow-1 mb-4">
                          {project.description}
                        </Card.Text>

                        <div className="mb-4">
                          {project.tech.map((t, index) => (
                            <Badge key={index} bg="secondary" className="me-1 mb-1 opacity-75 fw-normal">
                              {t}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-auto d-grid gap-2">
                          {project.link && (
                            <Button
                              variant="primary"
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </Button>
                          )}
                          <Button
                            variant="outline-primary"
                            onClick={() => handleOpenModal(project)}
                          >
                            View Code Demo
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered scrollable>
          <Modal.Header closeButton style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)', borderBottomColor: 'rgba(255,255,255,0.1)' }}>
            <Modal.Title>{selectedProject?.title} - Code Demo</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: 'var(--surface-color)', color: 'var(--text-color)' }}>
            <div className="alert alert-info border-0" role="alert" style={{ backgroundColor: 'rgba(13, 202, 240, 0.15)', color: '#0dcaf0' }}>
              <strong>Notice:</strong> This is a simplified demonstration snippet. The actual source code is private property of the client and cannot be shared publicly.
            </div>

            <div className="bg-dark p-3 rounded mt-3 position-relative" style={{ border: '1px solid rgba(255,255,255,0.1)', maxHeight: '40vh', overflowY: 'auto' }}>
              <Badge bg="secondary" className="position-absolute top-0 end-0 m-2">
                {selectedProject?.language}
              </Badge>
              <pre className="m-0" style={{ color: '#e0e0e0', whiteSpace: 'pre-wrap' }}>
                <code>
                  {selectedProject?.demoCode}
                </code>
              </pre>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: 'var(--bg-color)', borderTopColor: 'rgba(255,255,255,0.1)' }}>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default Portfolio;
