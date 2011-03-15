<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="job">

  <h3><xsl:value-of select="title" /></h3>

  <div class="subhead">
    <xsl:for-each select="region[position() = last()]">
      <xsl:value-of select="self::node()" />
    </xsl:for-each>
    <xsl:if test="location != ''">
      (<xsl:value-of select="location" />)
    </xsl:if>
    <span class="reqid">Position: <xsl:value-of select="requisitionid" /></span>
  </div>

  <div class="description">
    <xsl:value-of select="description" disable-output-escaping="yes" />
  </div>
    
</xsl:template>

</xsl:stylesheet>